from os.path import exists
import subprocess
root_path = "/Users/sunilkumarpasupuleti"
downloaded_pdf = root_path+"/Downloads/"
old_pdf_name = input("Enter the pdf name to change from : ")
downloaded_pdf+=old_pdf_name
pdf_name="Sunil-Cv.pdf"
pdf = root_path+"/Downloads/"+pdf_name



printCount=1
def print_with_gap_function(message):
    global printCount
    print('\n')
    print(f"{printCount}. {message}")
    printCount+=1

def main_function():
    resume_template_root = root_path+"/Desktop/projects/portfolio\ and\ resume/resume-template/"
    resume_template_pdf_path = resume_template_root
    resume_template_pdf = resume_template_pdf_path+pdf_name

    old_portfolio_root = root_path+"/Desktop/projects/portfolio\ and\ resume/old.webwizard.in/"
    old_portfolio_pdf_path = old_portfolio_root+"assets/pdf/"
    old_portfolio_pdf = old_portfolio_pdf_path+pdf_name

    portfolio_root = root_path+"/Desktop/projects/portfolio\ and\ resume/webwizard.in/"
    portfolio_pdf_path = portfolio_root+"public/"
    portfolio_pdf = portfolio_pdf_path+pdf_name


    certificates_root = root_path+"/Desktop/certificates/"
    certificates_pdf_path = certificates_root
    certificates_pdf = certificates_pdf_path+pdf_name

    icloud_drive_pdf_path = root_path+"/Library/Mobile\ Documents/com~apple~CloudDocs/Applications/"
    icloud_drive_pdf =  icloud_drive_pdf_path+pdf_name

    # Rename the file
    rename_file_command = f"mv {downloaded_pdf} {pdf}"
    subprocess.run(rename_file_command, shell=True)
    print_with_gap_function(f'Renamed file from {downloaded_pdf} to {pdf}')

    # Change file in resume-template
    remove_cv_from_template_command = f"rm {resume_template_pdf}"
    if exists(resume_template_pdf) :
     subprocess.run(remove_cv_from_template_command, shell=True)
     print_with_gap_function(f'Removed file {resume_template_pdf}')
    copy_cv_to_template_command = f"cp {pdf} {resume_template_pdf_path}"
    subprocess.run(copy_cv_to_template_command, shell=True)
    print_with_gap_function(f'Copied file from {pdf} to {resume_template_pdf}')


    # Change file in certificates
    remove_cv_from_certificates_command = f"rm {certificates_pdf}"
    if exists(certificates_pdf) :
     subprocess.run(remove_cv_from_certificates_command, shell=True)
     print_with_gap_function(f'Removed file {certificates_pdf}')
    copy_cv_to_certificates_command = f"cp {pdf} {certificates_pdf_path}"
    subprocess.run(copy_cv_to_certificates_command, shell=True)
    print_with_gap_function(f'Copied file from {pdf} to {certificates_pdf}')


    # Change file in old Portfolio
    remove_cv_from_old_portfolio_command = f"rm {old_portfolio_pdf}"
    if exists(old_portfolio_pdf) :
      subprocess.run(remove_cv_from_old_portfolio_command, shell=True)
      print_with_gap_function(f'Removed file {old_portfolio_pdf}')
    copy_cv_to_old_portfolio_command = f"cp {pdf} {old_portfolio_pdf_path}"
    subprocess.run(copy_cv_to_old_portfolio_command, shell=True)
    print_with_gap_function(f'Copied file from {pdf} to {old_portfolio_pdf}')

    # Change file in new Portfolio
    remove_cv_from_portfolio_command = f"rm {portfolio_pdf}"
    if exists(old_portfolio_pdf) :
      subprocess.run(remove_cv_from_portfolio_command, shell=True)
      print_with_gap_function(f'Removed file {portfolio_pdf}')
    copy_cv_to_portfolio_command = f"cp {pdf} {portfolio_pdf_path}"
    subprocess.run(copy_cv_to_portfolio_command, shell=True)
    print_with_gap_function(f'Copied file from {pdf} to {portfolio_pdf}')

    # Git update resume-template
    subprocess.run(f"""cd {resume_template_root} &&
                    git add . && 
                    git status &&
                    git commit -m 'CV Changed' &&
                    git push github master
                    """, shell=True)

    # Git update old Portfolio
    subprocess.run(f"""cd {old_portfolio_root} &&
                    git add . && 
                    git status &&
                    git commit -m 'CV Changed' &&
                    git push github master
                    """, shell=True)
        # Git update old Portfolio
    subprocess.run(f"""cd {portfolio_root} && npm run build &&
                    git add . && 
                    git status &&
                    git commit -m 'CV Changed' &&
                    git push github master
                    """, shell=True)
    
    # Change file in icloud
    copy_cv_to_icloud_drive_command = f"cp {pdf} {icloud_drive_pdf_path}"
    subprocess.run(copy_cv_to_icloud_drive_command, shell=True)
    print_with_gap_function(f'Copied file from {pdf} to {icloud_drive_pdf}')


if exists(downloaded_pdf):
  while True:
    continue_with_default = input(f"Do you want to continue with default name {pdf_name} Yes|No - ")
    continue_with_default = continue_with_default.lower()
    if continue_with_default == "yes" or continue_with_default == "y":
      main_function()
      break
    elif continue_with_default == 'no' or continue_with_default =='n':
      pdf_name = input("Enter pdf name : ") 
      pdf = root_path+"/Downloads/"+pdf_name
      main_function()
      break
    else:
      print("----------       Please enter valid an input -------------------- ")
else:
  print(f'Sorry {downloaded_pdf} does not exists')





