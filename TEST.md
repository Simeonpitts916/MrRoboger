Describe: numberFinder()

Test: "It should return a string that list all numbers from 0 to the number provided as an argument"
Code: numberFinder(0)
Expected Ouptut: "0"

Test: "It should replace all numbers that contain a 1 with "Beep""
Code: numberFinder(1)
Expected Ouptut: "0, "Beep""

Test: "It should replace all numbers that contain a 2 with "Boop""
Code: numberFinder(2)
Expected Ouptut: "0, "Beep", "Boop""

Test: "It should replace all numbers that contain a 3 with "Won't you be my neighbor""
Code: numberFinder(3)
Expected Ouptut: "0, "Beep", "Boop, "Won't you be my neighbor""

Test: "It should replace numbers containing both 1 and 2 with "Boop"
Code: numberFinder(12)
Expected Ouptut: "0 ....... "Boop""

Test: "It should replace numbers containing both 1 and 3 with "Won't you be my neighbor"
Code: numberFinder(13)
Expected Ouptut: "0 ....... "Won't you be my neighbor""

Test: "It should replace numbers containing both 2 and 3 with "Won't you be my neighbor"
Code: numberFinder(23)
Expected Ouptut: "0 ....... "Won't you be my neighbor""