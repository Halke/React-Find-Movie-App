# To run this app, follow the steps:

### 1.) Clone this repo on your PC

### 2.) Install dependencies

Once you clone the repo, open the cmd (Command Prompt) and navigate to the directory where you have cloned the repo. Inside cloned directory run the command: "npm install". Wait few minutes for installation to complete.

In case you don't have the Node Package Manager (npm), follow this [How To Install](https://blog.npmjs.org/post/85484771375/how-to-install-npm) guide.

### 3.) Start the app

From cmd, inside cloned directory, run the command "npm start". This command will run the app on the port 3000 and will automatically open the app inside your default Web browser.

## DESIGN PATTERN: Atomic Design Pattern

Atomic Design Pattern, developed by Brad Frost and Dave Olsen, is widely used with React Apps. The goal of using this patten can be seen on the following image.

![Atomic Design Pattern illustration](https://miro.medium.com/max/875/1*PcQ-m317YX6ct9ccBi6H1Q.png)

The goal is to create the components so simple so they can't be divided any more (like atoms). Combining these atomic components more complex components are built. This desing pattern promotes consistency, modularity and scalability.

#### ATOMS
Buttons, inputs, form lables....

#### MOLECULES
Combined of more atoms (buttons, inputs, form labels...) to achieve some functionality.

#### ORGANISMS
Combining molecules together to form organisms that make up a distinct section of an interface (i.e. navigation bar)

#### TEMPLATES
Consisting mostly of groups of organisms to form a page — where clients can see a final design in place.

#### PAGES
An ecosystem that views different template renders. We can create multiple ecosystems into a single environment — the application.
