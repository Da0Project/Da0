<!-- @format -->

# **OVERVIEW**

DAO is a great solution for important community problems, including contribution compensation, decision-making of the project, and measuring community value in web3 ecosystem. However, the proper managing tool for DAO is still few especially, discord bot for DAO provides only very basic functions. Therefore, Da0 is building ultimate tools for managing DAO on discord. Through the Da0’s discord bot ”Da0”, you can manage DAO tasks, DAO members more efficiently. Da0 provides the registration automation, DAO information aggregator, and proposal alert system in the discord. For these features, Da0 uses the own web server to pull updated states of blockchain.

# **Why this project is important?**

## Potential of DAO

David Spinks wrote a great Twitter thread on [how DAOs solve important community problems](https://twitter.com/davidspinks/status/1455548391744700431), including contribution compensation (DAO members get financial upside for creating more value for the community), member decision-making (DAO members have real influence through voting), and measuring community value (the value of the DAO is reflected in the value of the token).

As I thought about all of the other challenges facing Web2 community builders, I really got excited about the potential of DAOs:

- Monetization, Membership, Scalability, Engagement, Data

Clearly, many of the advantages of DAOs stem from the promise of ownership, which blockchain enables. This is why many have called DAOs the [next evolution in online communities](http://next%20evolution%20in%20online%20communities/).

## Mobile Application Type

An important role in improving user experience

- mobile-first approach to user-first DAO means everyone has equal access to decision making process and became real owner of service and protocol.
- The low voter turnout mentioned as a problem can be solved by improving accessibility through alert services and mobile services, and tools can be provided to facilitate independent application creation, addressing the current DAO structural problems centered on discord.

## Necessity of Modular Tool for Distributed Operation

1. Discord has become de facto tool for governance deliberation
   - The real decision-making is happening off-chain in conversations and then voting on-chain as the final step of governance
   - Need to lower cognitive overhead getting involved with governance so anyone can get involved, vet, or whistleblow if something's not going right
2. Difficult to standardize fixed set of terms how should governance in an archetype will be
   - DAO processes have matured enough to be used and trusted but they are always evolving and always changing
   - Instead of building direct DAO tooling

# What we will do

## Discord bot for DAO management

Da0 is building tools for managing DAO on discord. Through Da0’s discord bot ”Da0”, you can manage DAO tasks, DAO members more efficiently.

## Features

### Enrollment Automation

Through the wallet connection in the discord app, Da0 provide the automated authorization in convenient way. When the wallet connection steps, we check the user has the token of the DAO in wallet. Therefore, the manager of the DAO discord don’t have to check if the joined user has the DAO token or DAO’s NFT. Through the Da0 enrollment automation, DAO manager doesn’t have to use the Google form or check if the user hold the token of DAO one by one because Da0 check the authority and store the information and provide it as the API.

### DAO Information Aggregator

Many DAO’s struggle is providing DAO’s information to anonymous user to join their DAO, but it is hard to provide information and aggregate it in the discord. To solve this problem, by using our application, by typing simple slash command, user can view DAO’s information such as number of DAO’s token holder, DAO treasury balance and overall information of the DAO.

### New Proposal Alert

As the on-chain information is separated from the off-chain, the vote rate of the DAO is the one of the biggest problem. Therefore, the Da0 provide the on-going proposal alert for the members, and proposal information such as voting status, voting period and snapshot.

# **Development**

## Server

**(Temporarily using NodeJS to run the local server)**

**API, Hosting Discord Bot Server Using Google Cloud**

## Database

**Use MySQL of amazon RDS to contain the following information:**

- **Mapping Discord id - Wallet Address**
- **Tracked Token data**

## Connect with On-chain Data

- **Wallet Authorization with Using Solbot**
- **Tracking/Saving Data with Solscan**

Various information such as DAO information, token owner information, and discord information is included in the DB. These data which are delivered to Discordbot through API is provided to users. In addition, we use Solscan and Solbot to make solana wallet authentication and track on-chain data.

# **Project Roadmap**

## 2022 Feb

**Planning**

**Market Research**

## 2022 Mar(present)

**DB structure**

**Simple bot implementation**

- Connect with Solscan
- Application Form bot

## 2022 Apr

**Bot implementation**

- Connect Wallet / Wallet Authorization
- Add various form options(integrate with another dao plaforms)
- DAO Information Aggregator
- New Proposal Alert
- Support Ethereum Network

# **Team**

### Charin Kim

President of EWHA W. Univ Blockchain Academic Club

DM application form of Da0 / Database

[https://www.linkedin.com/in/chaerin-kim-a270101b8/](https://www.linkedin.com/in/chaerin-kim-a270101b8/)

### Seungwon Choi

Alumni of EWHA W. Univ Blockchain Academic Club

Authorization system of Da0 / Server / Frontend

[https://www.linkedin.com/in/seungwon-choi-8a74a6210/](https://www.linkedin.com/in/seungwon-choi-8a74a6210/)
