# SNOW-Angular-directives-components-modules

## Components
Components are the basic building blocks in the Angular application. 
Components contain the data & UI logic that defines the view and behavior of the web application.
Components in Angular are defined using a @Component decorator. 
It includes a selector, template, style, and other properties, and it specifies the metadata required to process the component.
Angular applications can have multiple components. 
Each component handles a small part of UI. 
These components work together to produce the complete user interface of the application. 
An Angular application has one root component (AppComponent) which is specified in the bootstrap array under the main ngModule module defined in the app.module.ts file.

## @Component Decorator
In src/app, we can find the below files referred to as a root component of the application.
app.component.css - holds all the CSS styles
app.component.html - this is template contains typical HTML elements and alters the HTML based on our app's logic and DOM manipulations.
app.component.ts - contains typescript code to control the component behavior
- have a look at the app.component.ts file under app folder and understand the code behind the root component of the application.

![image](https://user-images.githubusercontent.com/12488769/148705080-789272fb-f093-4207-b1be-7c93c1f58921.png)

In this file, we export the AppComponent class, and we decorate it with the @Component decorator, imported from the @angular/core package, which takes a few metadata, such as:
selector: A CSS selector that tells Angular to create and insert an instance of this component wherever it finds the corresponding tag in template HTML. For example, if an app's HTML contains , then Angular inserts an instance of the AppComponent view between those tags.
templateUrl: The module-relative address of this component's HTML template. Alternatively, you can provide the HTML template inline, as the value of the template property.
styleUrls: This is an array of relative paths to where the component can find the styles used to style the HTML view. Alternatively, you can provide the CSS Style inline, as the value of the styles property.


The template is an HTML file in Angular. 
Let's have a look at the app.component.html file under app folder.
![image](https://user-images.githubusercontent.com/12488769/148705109-9933429d-69d2-4176-953c-ab8c930b3518.png)

The title inside the double curly bracket used for rendering the view. 
Angular looks for a title property in our component and binds the property to our view. 
This is called data binding.

AppComponent uses an inline template and style to render the view of the application
In the case of a Multi-line template, you can use BackTicks/graves (`) to enclose the template string.
![image](https://user-images.githubusercontent.com/12488769/148705132-fe387c20-4bf0-4684-9b61-0321c729e1f8.png)

## How to create a component in Angular?![image](https://user-images.githubusercontent.com/12488769/148705139-034d5cf9-19cb-4bdc-a8d6-e95b5feab041.png)

Run the ng generate component <component_name> or ng g c <component-name> command in the terminal to create a component
For example: 
When we run ng g c server in the terminal, CLI creates a component and registers this component in the AppModule. 
Now, you're able to see a server folder inside src/app. This server folder contains 4 files - 
server.component.html, 
server.component.spec.ts, 
server.component.ts 
server.component.css.

## Component life cycle hooks
Angular creates a component; renders it; creates and renders its children; checks it when it’s data-bound properties change; and destroys it before removing it from the DOM. 
These events are called "Lifecycle Hooks". 
These Lifecycle hooks have eight different function calls which correspond to the lifecycle event. 
Every angular component has a life cycle event carried out in 2 different phases - one linked to the component itself and the other linked to the children of that component.

## 8 life cycle hooks
![image](https://user-images.githubusercontent.com/12488769/148705177-4b95bce0-6643-4e49-8c75-a2bf58afe8fe.png)

constructor() - The constructor of the component class gets executed first, before the execution of any other lifecycle hook events. If we need to inject any dependencies into the component, then the constructor is the best place to do so.
ngOnChanges() - Called whenever the input properties of the component change. It returns a SimpleChanges object which holds any current and previous property values.
ngOnInit() - Called once to initialize the component and set the input properties. It initializes the component after Angular first displays the data-bound properties.
ngDoCheck() - Called during all change-detection runs that Angular can't detect on its own. Also called immediately after the ngOnChanges() method.
![image](https://user-images.githubusercontent.com/12488769/148705191-0087abc4-1d05-413e-98ea-c17da24dc10a.png)

ngAfterContentInit() - Invoked once after Angular performs any content projection into the component’s view.
ngAfterContentChecked() - Invoked after each time Angular checks for content projected into the component. It's called after ngAfterContentInit() and every subsequent ngDoCheck().
ngAfterViewInit() - Invoked after Angular initializes the component's views and its child views.
ngAfterViewChecked() - Invoked after each time Angular checks for the content projected into the component. It called after ngAfterViewInit() and every subsequent ngAfterContentChecked().
ngOnDestroy() - Invoked before Angular destroys the directive or component.
![image](https://user-images.githubusercontent.com/12488769/148705197-91e17be0-afc6-46d9-8c54-b5565b7358cb.png)

## @NgModule
Every Angular application consists of at least one module, the root module. We bootstrap that module to launch the application.
NgModules are TypeScript classes decorated with the @NgModule decorator imported from the @angular/core package.
NgModule takes metadata and describes how to compile a component's template and how to create an injector at runtime. 
It identifies the module's own components, directives, and pipes and makes them public through the export property which can be used by external components.
The Angular CLI generates the basic AppModule (src/app/app.module.ts file) when creating a new application.
![image](https://user-images.githubusercontent.com/12488769/148705223-43147807-7ca8-4a40-9b28-e2f615fe71b3.png)

@NgModule takes the below metadata to launch the application:
declarations — contains a list of components, directives, and pipes, which belong to this module.
imports — contains a list of modules, which are used by the component templates in this module reference. For example, we import BrowserModule to have browser-specific services such as DOM rendering, sanitization, and location.
providers — the list of service providers that the application needs.
bootstrap — contains the root component of the application
Angular CLI creates an application with one component (AppComponent), so it is in both the declarations and the bootstrap arrays.

## bootstrap
The steps involved in starting an angular application:
The main.ts is an entry point of an angular application.
Then, we bootstrap an angular application, and we pass app.module.ts as an argument. In app.module.ts, we tell the Angular to bootstrap the AppComponent.
Then, Angular analyzes this AppComponent and knows there is an app-root selector defined.
Now, Angular able to handle app-root in the index.html file.
Finally, the index.html file is loaded on the browser.

## Angular directives
Angular directives allow us to manipulate the DOM. 
The directive is a marker on a DOM element that tells Angular to change the appearance, behavior, and layout of the DOM element and its children. 
In Angular, most directives begin with ng, where ng stands for Angular, and extend the HTML.

## Types of directives
There are three kinds of directives in Angular:
Component Directives - Component directives alter the details of how the component should be processed, instantiated, and used at runtime.
Structural Directives - Structural directives are used to manipulate and change the structure of the DOM elements.
Attribute Directives - Attribute directives are used to change the look and behavior of the DOM elements.

## Structural directives
Structural directives are used for adding, removing, or manipulating DOM elements. 
Structural directives start with an asterisk (*) followed by a directive name. 
There are three built-in structural directives – 
ngIf 
ngFor 
ngSwitch.


## ngIf
The *ngIf directive allows us to add or remove DOM Elements based upon the Boolean expression. 
It doesn't hide the elements, but generally adds or removes them physically from the DOM.
![image](https://user-images.githubusercontent.com/12488769/148705293-b2d0e0ab-0972-439d-acb4-76082b2bcadc.png)

## ngFor
The *ngFor directive is used to repeat a part of the HTML template once per each item from an iterable list.
![image](https://user-images.githubusercontent.com/12488769/148705320-de52ab14-080d-4beb-8b88-d9b4ce669e1f.png)

![image](https://user-images.githubusercontent.com/12488769/148705323-e2ae1229-20c7-4ea8-b777-2e69db499871.png)

## ngSwitch
The Angular NgSwitch has a set of cooperating directives: NgSwitch, NgSwitchCase, and NgSwitchDefault.
NgSwitch is an attribute directive that controls the behavior of the other two switch structural directives – 
NgSwitchCase and NgSwitchDefault. That's why we write NgSwitch as [ngSwitch], NgSwitchCase as *ngSwitchCase, and NgSwitchDefault as *ngSwitchDefault.
NgSwitchCase displays its element when its value matches the switch value. 
NgSwitchDefault displays its element when no sibling NgSwitchCase matches the switch value.
![image](https://user-images.githubusercontent.com/12488769/148705336-0ee53230-a8b8-468b-a642-785d0eb6b924.png)

## <ng-template>
Structural directives can work with the HTML5 <ng-template> element, which is designed to hold template code

![image](https://user-images.githubusercontent.com/12488769/148705362-13d421dd-c50c-46da-8c56-418f9ba0aa29.png)

## Attribute directives
Attribute directives are used to change the look and behavior of the DOM elements.
There are two built-in attribute directives – 
ngClass 
ngStyle.
![image](https://user-images.githubusercontent.com/12488769/148705370-b4b78e4a-79e8-4cdf-9abe-317c50ea6521.png)

## ngClass
The [ngClass] directive is used for adding or removing the CSS classes on an HTML element. 
It allows us to apply CSS classes dynamically based on expression evaluation.
Syntax: 
<some-element [ngClass]="value"> ....</some-element>
\- The value can be
string - the CSS classes declared as string. For example, <some-element [ngClass]="'first second'">...</some-element> where first and second are the two CSS Classes delimited by space. Both the first and second CSS style will be applied to the element.
Array - the CSS classes declared as Array elements. For example,<some-element [ngClass]="['first', 'second']">...</some-element>
Object - in which keys are CSS classes and values are expression that evaluates true or false. The CSS Class applied to the element when the expression evaluates a truthy value, else they will be removed. For example,<some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
![image](https://user-images.githubusercontent.com/12488769/148705385-12eaaf06-c799-4308-9fb3-0b60f952046f.png)

## ngStyle directive
The [ngStyle] directive allows us to dynamically change the style of HTML element based on the expression.
Syntax: 
<some-element [ngStyle]="objExp">...</some-element>
![image](https://user-images.githubusercontent.com/12488769/148705402-08fc9e4f-a861-4000-a831-45f518e85648.png)

## Custom directive
We can create our custom directives to use in the 
Angular component with the CLI command ng generate directive <name of the directive>.
For example, 
When we run this command ng generate directive text in a terminal, the CLI creates text.directive.ts file and corresponding test file text.directive.spec.ts under src/app folder in our application. 
Also, CLI declares this directive class under AppModule

![image](https://user-images.githubusercontent.com/12488769/148705428-02efa551-f92a-4045-ad44-4682d5ad24f1.png)

you use this directive in the template of the root AppComponent and apply the directive as an attribute.
For Example: <p appText> Text inside....</p>











