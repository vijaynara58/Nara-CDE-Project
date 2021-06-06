# Installation Steps



## Using npm

Run commands

1) ```npm install```


2) ```npm run dev```


## Or using yarn

Run commands 

1) ```npm install --global yarn```

2) ```yarn install```

3) ```yarn run dev```


### If you see the window below then you are set to build NARA SHOPPING APP!

![home](https://user-images.githubusercontent.com/62456972/120936441-c3c91100-c6d5-11eb-8507-6a5188a701ac.PNG)


### If you want to run the application on your local host: you will need to run the command : npm run dev

# Also if you want to make payments work: you will need to install stripe.exe file and run the command "stripe login" login with stripe but it requires my stripe account credentials since the stripe signing secret and public key is in my stripe account. Also, after stripe login, you will get a secret key which is valid for 90 days. You have to ensure that this key is the same in your .env.local file run the command "listen --forward-to localhost:3000/api/webhook" Only then payments will work


## For ease of access, please use this link to use my application as this deployed version already has Environment Variables set up on Vercel(which is the hosting platform). Link to test the application : https://nara-cde-project.vercel.app/
