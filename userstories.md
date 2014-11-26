
## MVP
=========
#### I can select my state (5)
* I can click on my state on a map

---- 

#### I can select my city from a list of cities (1)

----
 
#### I can create a post (8)
* I can add a title
* I can add a description
* I can add a name
* I can add the shop location that I frequent
* I can add an email

---- 

#### I can add cards I have to my post (20)
* I can search for cards with autocomplete functionality
* I can click a card in the search field to add it to my list
* I can change the quantity of the card (default 1)
* I can delete a card if I accidentally added it

---- 

#### I can add cards I want to my post (1 - After haves are done)
* I can search for cards with autocomplete functionality
* I can click a card in the search field to add it to my list
* I can change the quantity of the card (default 1)
*  I can delete a card if I accidentally added it

---- 

#### I can edit my post (8)
* I can delete cards
* I can update card quantity

---- 

#### I can add non-card items (misc. section) (3)
* I can add random supplies / gaming accessories via text-area

---- 

#### I can view other posts (3)
* I can view by most recently updated in descending order

----
 
#### I can search for cards in each post (5)
* I can search by card name based on haves or wants

========
## Stretch Goals
========

#### I can authenticate a user's post via email

----

#### I can authenticate via social networks

----

#### I can chat with other users

---- 

#### I can look up the price of cards to compare a trade (implement an online pricing database)

---- 

#### I can keep track of my trade history

---- 

#### I can add feedback for users

====
### All About MVC -- Model-View-Controller
====
#### Models: Nouns

* List of Posts: Collection
  * Properties:
  * Methods:
    * CRUD
    * Add a post
    * Remove a post
    * Edit / update a specific post
    * Most recently updated post displays on top
* Post
  * Properties:
    * Cards names and quantities
    * Haves and wants
    * Author and details (Name, shop, email)
  * Methods:
    * Create post
    * Edit the haves / wants of a post
    * Delete specific items from haves / wants
    * Delete entire post
    * Store post in collection of posts

#### Controllers:

* Workflows:
  * Edit a specific post:
    * Get a specific post by author / cards / shop
    * Edit the post and save changes
    * Display the view of the list of all posts for that city
  * Add a new post:
    * Accept input: Search autcomplete to find card names / dropdown for quantity
    * Add cards to have / wants
    * Add misc items via textarea 
    * Add the new post to the collection of posts
    * Display the view of all posts in the area

#### Views: Display Items

* Map of United States (Home page)
  * Click state to display cities
  * Click city to go to list of posts
* List of Individual Posts
  * Filtered by:
    * Last updated
    * Shop
    * Card
    * Name
* Individual Post
  * Date posted
  * Date last updated
  * Listed by date last updated
  * Auto delete after 30 days of no update?
  * Delete whole post manually
  * Haves / Wants
  * Name / Shop / Title
  * Misc Items
* Add a Post
* Edit a Post

