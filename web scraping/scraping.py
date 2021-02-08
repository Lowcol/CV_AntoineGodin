import requests
import smtplib
from email.message import EmailMessage
from selenium import webdriver

driver = webdriver.Firefox(executable_path="C:/Users/Tyrannosaurus Rex/Desktop/project/geckodriver.exe")
driver.get("https://www.gameinformer.com/2021")

nb=1


main = driver.find_element_by_class_name("ds-main")
month = main.find_elements_by_class_name("view-content")
calendar = month[nb].find_elements_by_class_name("calendar_entry")

b = 0
of = ""

while b != len(calendar):
	title = calendar[b].find_element_by_tag_name("a").text
	platform = calendar[b].find_element_by_tag_name("em").text
	date = calendar[b].find_element_by_tag_name("time").text
	b += 1
	of = of + (title+" ("+platform+") -"+date+"-\n\n")

# print(of)

driver.close()

nb=+1

def email_alert(subject, body, to):
	msg = EmailMessage()
	msg.set_content(body)
	msg["subject"] = subject
	msg["to"] = to

	user = "Godinantoine2002@gmail.com"
	msg["from"] = user
	password = "vixmltwdiqfoqjul"

	server = smtplib.SMTP("smtp.gmail.com", 587)
	server.starttls()
	server.login(user, password)
	server.send_message(msg)

	server.quit()


if __name__=='__main__':
	email_alert("GAME ALERT", of, "4389340573@msg.telus.com")
