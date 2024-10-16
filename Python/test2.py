import logging

# Basic configuration
logging.basicConfig(format='%(asctime)s - %(levelname)s - %(message)s', level=logging.INFO,filename='app.log')


age_name=input('enter user age and name:')
logging.info(age_name)
age=int(age_name[0:2])
logging.info(age)
name=age_name[2:]

try:
   if age>18:
       logging.info(name)
except ZeroDivisionError:
    logging.error("An error occurred")
