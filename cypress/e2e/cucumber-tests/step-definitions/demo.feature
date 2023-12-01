Feature: Demo Feature

    Just to create a quick BDD Demo
    this is second line of the description

    @focus
    Scenario: Should load example website
        Given I open example page
        Then I see page title "Example"
        And I see text
        And I see text


    Scenario Outline: Should load example website
        Given I open example page
        Then I see page title "<title>"
        And I see text
        And I see text

    Examples:
        | title |
        | Example | 
        | Fail | 