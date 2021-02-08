import requests
import random
import json
from selenium import webdriver
import urllib.request as urllib
import matplotlib.image as mpimg 
import matplotlib.pyplot as plt 


idnb = str((random.randint(1, 151)))



url="https://pokeapi.co/api/v2/pokemon/" + idnb + "/"
request123 = requests.get(url)
name = request123.json()

print(name["name"])
print(name["id"])

if len(name["types"])==2:
	print(name["types"][0]["type"]["name"])
	print(name["types"][1]["type"]["name"])
else:
	print(name["types"][0]["type"]["name"])


"""
image 28 
"""
 
idnb = int(idnb)
if idnb >= 146:
	idnb += 29
if idnb == 145:
	idnb += 28
if idnb >= 122 and idnb <= 144:
	idnb += 27
if idnb >= 110 and idnb <= 121:
	idnb += 26
if idnb >= 105 and idnb <= 109:
	idnb += 25
if idnb >= 103 and idnb <= 104:
	idnb += 24
if idnb >= 89 and idnb <= 102:
	idnb += 23
if idnb == 88:
	idnb += 22
if idnb >= 83 and idnb <= 87:
	idnb += 21
if idnb >= 80 and idnb <= 82:
	idnb += 20
if idnb == 79:
	idnb += 19
if idnb == 78:
	idnb += 18
if idnb == 77:
	idnb += 17
if idnb == 76:
	idnb += 16
if idnb == 75:
	idnb += 15
if idnb == 74:
	idnb += 14
if idnb >= 53 and idnb <= 73:
	idnb += 13
if idnb == 52:
	idnb += 11
if idnb == 51:
	idnb += 10
if idnb == 50:
	idnb += 9
if idnb >= 38 and idnb <= 49:
	idnb += 8
if idnb == 37:
	idnb += 7
if idnb >= 28 and idnb <= 36:
	idnb += 6
if idnb == 27:
	idnb += 5
if idnb == 26:
	idnb += 4
if idnb >= 20 and idnb <= 25:
	idnb += 3
if idnb == 19:
	idnb += 2
if idnb <= 18:
	idnb += 1
idnb = str(idnb)



driver = webdriver.Firefox(executable_path="C:/Users/Tyrannosaurus Rex/Desktop/project/geckodriver.exe")
driver.get("https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number")
kpath = "/html/body/div[1]/div[2]/div/div[7]/div/div[1]/div[4]/table[2]/tbody/tr[" + idnb + "]/th/a/img"
img_url = driver.find_element_by_xpath(kpath)


img = img_url.get_attribute("src")
print(img)
# image = urllib.Request(img, headers={"User-Agent": "Mozilla/5.0"})
# image1 = mpimg.imread(img)
# plt.imshow(image1)


driver.close()


# print(request.status_code)