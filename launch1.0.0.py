from gpiozero import LED
from time import sleep

led = LED(17)
n = 0

while n<3:
    led.on()
    sleep(1)
    led.off()
    sleep(1)
    n = n + 1