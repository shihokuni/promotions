Feature: The promotion service back-end
    As a Store Owner
    I need a RESTful catalog service
    So that I can keep track of all my promotion

    Background:
        Given the following promotions
            | title          | promotion_type   | start_date | end_date   | active |
            | Christmas Sale | buy 1 get 2      | 2021-07-01 | 2022-07-01 | true   |
            | New Product    | 10%OFF           | 2021-01-01 | 2022-01-01 | false  |
            | Black Friday   | 20%OFF           | 2021-12-01 | 2022-12-01 | true   |
            | Summer Sale    | buy 1 get 1 free | 2021-11-01 | 2022-11-01 | false  |


    Scenario: The server is running
        When I visit the "Home Page"
        Then I should see "Promotion RESTful Service" in the title
        And I should not see "404 Not Found"

    Scenario: Create a Promotion

    Scenario: List all Promotions


    Scenario: Read a promotion


    Scenario: Search all 10%OFF


    Scenario: Update a Promotion

    Scenario: Delete a Promotion


    Scenario: Activate a Promotion

    Scenario: Deactivate a Promotion



