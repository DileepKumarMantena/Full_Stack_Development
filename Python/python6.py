from docx2pdf import convert
import os
from fpdf import FPDF

def convert_to_pdf(input_folder, output_folder):
    # Check if input folder exists
    if not os.path.exists(input_folder):
        print(f"Input folder '{input_folder}' does not exist.")
        return
    
    # Create output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Get list of files in the input folder
    files = os.listdir(input_folder)

    # Iterate over each file in the folder
    for file in files:
        input_path = os.path.join(input_folder, file)
        output_path = os.path.join(output_folder, file.replace(".docx", ".pdf").replace(".txt", ".pdf"))
        
        # Convert Word document to PDF
        if file.endswith(".docx"):
            try:
                convert(input_path, output_path)
                print(f"Converted '{input_path}' to '{output_path}'.")
            except Exception as e:
                print(f"Error converting '{input_path}': {e}")
        
        # Convert text file to PDF
        elif file.endswith(".txt"):
            try:
                txt_to_pdf(input_path, output_path)
                print(f"Converted '{input_path}' to '{output_path}'.")
            except Exception as e:
                print(f"Error converting '{input_path}': {e}")
        else:
            print(f"Unsupported file format: '{input_path}'.")

def txt_to_pdf(input_path, output_path):
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size = 12)
    
    # Read text content from the text file
    with open(input_path, "r", encoding="utf-8") as txt_file:
        text = txt_file.read()
    
    # Add text content to PDF
    pdf.multi_cell(0, 10, text)
    
    # Save PDF
    pdf.output(output_path)

# Example usage
#c:\Users\user\Downloads/Python 
input_folder = "c:/Users/user/Downloads/Java/Java_Classes _1"
output_folder = "c:/Users/user/Downloads/Java_Pdf"

convert_to_pdf(input_folder, output_folder)
