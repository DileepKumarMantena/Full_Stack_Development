from datetime import datetime, timedelta

effective_date = "2/28/2023"  # Corrected year format

# Convert effective_date to a datetime object
effective_date_obj = datetime.strptime(effective_date, "%m/%d/%Y")

# Add one month to effective_date
one_month_later = effective_date_obj + timedelta(days=30)

# Get the current date
current_date = datetime.now()

# Compare current date with effective_date plus one month
if current_date > one_month_later:
    print("Update")
else:
    print("no need to update")
