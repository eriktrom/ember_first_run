Feature: Visual guides
  In order to start hacking with ember quickly and confidently
  As a public user who knows some ruby and some javascript
  I want a visual version of the guides provided on the emberjs site. In essence, given an official emberjs guide, I want to press play and see someone using the given guide in a real app, with real context that will help me quickly.

  Scenario: Getting Started With Ember JS Guide
    When I want to get started with emberjs
    Then I should initially see the guide for getting started with ember js
    And I should see a table of contents for other available ember js guides

  Scenario: View another guide through the table of contents
    When I want to view another guide listed in the table of contents
    Then I should be able to navigate to that guide and view it

  Scenario: Sign up for new guides via email
    When I want to be updated about new guides via email
    Then when a new guide comes out I will be notified but not feel spammed