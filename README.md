## Hackathon Shape my City - 27-28. November 2020

# 06 Quantification of visitors of cultural events in Lucerne

### Create a prototype of a technical solution to count visitors of cultural events

Team: Yvonne Schärli, Salome Isch, Thushanth Gunasegaram, Adriana Ricklin, Cengiz Cetinkaya, Christina Sudermann 

## 1) What is the challenge about

### Problem Description
The City of Lucerne would like to register how many people visiting cultural events in the City of Lucerne are actually residents of Lucerne and how many are visiting from the agglomeration (K5: Ebikon, Emmen, Horw, Kriens, City of Lucerne incl. Littau and Reussbühl) or even outside the Region. This information would be used by the City of Lucerne to discuss more accurately with the agglomeration, how much they have to pay to the city on cultural promotion.

### Idea of Implementation 
At the entrance of the cultural events we would put a tablet where visitors are asked to insert the zip code of their home address. This would be a voluntary process and the visitors will be rewarded with a funny thank you note, once they put in the information. For the City of Lucerne a dashboard with visualisations of the visitor flow to the different cultural events can be created.

### Goal
Create a prototype of a technical solution to count visitors of cultural events. What is the percentage of visitors from the city of Lucerne and the surrounding municipalities?

### Data
There is no data which can be used as the goal of the challenge is to find a way of collecting the data.

### Partner
City of Lucerne, Kultur & Sport

Link to the Hackathon Challenges:
[hack.opendata](https://hack.opendata.ch/event/35#top)

## 2) Practical Approach to solve the challenge
### Set up the environment
1. Create connection to the MongoDB
2. 

### Architecture
Image of the Architecture
![Architecture](image.png)


### WebApp
For the Front end Web development, the javascript library "react" was used. For this challenge a very simple App will be setup because only a few buttons are needed for the input of the zip codes. It should be as simple as possible for the user.
The user gets a feedback after inserting the zip code.
Image


### Visualisation
For the visualisations a connection to the MongoDB was setup in Tableau. A dashboard with a map of the surrounding municipalities of Lucerne was created, as we want to see from which municipalities there are how many visitors. The information from the MongoDB server is regularly updated in order to have nearly real time data of the input of the zip codes at the events.
Image
