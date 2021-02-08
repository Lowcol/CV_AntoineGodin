import requests
from selenium import webdriver
import pokemon_code

driver = webdriver.Firefox(executable_path="C:/Users/Tyrannosaurus Rex/Desktop/project/geckodriver.exe")
driver.get("https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number")

kpath = "/html/body/div[1]/div[2]/div/div[7]/div/div[1]/div[4]/table[2]/tbody/tr[" + idnb + "]/th/a/img"


img_url = driver.find_element_by_xpath(kpath)





print(img_url.get_attribute("src"))
driver.close()

