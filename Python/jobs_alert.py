import smtplib
from email.message import EmailMessage
import requests
from bs4 import BeautifulSoup
import csv
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# ---------- EMAIL FUNCTION ----------
def send_email(sender, password, to_list, subject, body):  
    email = EmailMessage()  
    email['From'] = sender  
    email['To'] = ", ".join(to_list)  
    email['Subject'] = subject  
    email.set_content(body)  

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:  
        smtp.login(sender, password)  
        smtp.send_message(email, from_addr=sender, to_addrs=to_list)  
        print(f"✅ Email sent to {to_list} successfully!")


# ---------- JOB FETCHING ----------
def fetch_jobs(keyword):
    url = f"https://www.naukri.com/{keyword.replace(' ', '-')}-jobs?k={keyword}"
    response = requests.get(url, headers={"User-Agent": "Mozilla/5.0"})
    soup = BeautifulSoup(response.text, "html.parser")
    
    jobs = []
    for job_card in soup.select(".cust-job-tuple"):
        title = job_card.select_one(".title").get_text(strip=True) if job_card.select_one(".title") else "N/A"
        company = job_card.select_one(".subTitle").get_text(strip=True) if job_card.select_one(".subTitle") else "N/A"
        link = job_card.select_one(".title a")["href"] if job_card.select_one(".title a") else "N/A"
        jobs.append((keyword, title, company, link))
    
    return jobs


# ---------- SAVE JOBS TO CSV ----------
def save_jobs_to_csv(jobs):
    today = datetime.now().strftime("%Y-%m-%d")
    filename = f"jobs_{today}.csv"
    
    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["Keyword", "Title", "Company", "Link"])
        writer.writerows(jobs)
    
    print(f"📁 Jobs saved to {filename}")


# ---------- JOB ALERT FUNCTION ----------
def send_job_alerts(keywords, sender, password, recipient):
    all_jobs = []
    body = ""
    for keyword in keywords:
        jobs = fetch_jobs(keyword)
        all_jobs.extend(jobs)  # store for CSV
        body += f"\n=== Jobs for '{keyword}' ===\n\n"
        if not jobs:
            body += "No jobs found.\n\n"
        else:
            for _, title, company, link in jobs[:10]:  # send top 10
                body += f"{title} - {company}\n{link}\n\n"

    # Save to CSV
    save_jobs_to_csv(all_jobs)

    # Send email
    send_email(sender, password, [recipient], "Job Alerts (One-Time Run)", body)


# ---------- CONFIGURATION (from .env) ----------
sender_email = os.getenv("SENDER_EMAIL")
app_password = os.getenv("APP_PASSWORD")
recipient_email = os.getenv("RECIPIENT_EMAIL")
keywords = ["python developer", "django", "full stack developer"]

# 🚀 Run immediately once
send_job_alerts(keywords, sender_email, app_password, recipient_email)
