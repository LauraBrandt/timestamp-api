# Timestamp Microservice API
_By Laura Brandt_


This is one of the API projects for [FreeCodeCamp](https://www.freecodecamp.com/challenges/timestamp-microservice).

View the live version: [https://timestamp-api.herokuapp.com](https://timestamp-api.herokuapp.com)

### User Stories:
1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns `null` for those properties.

#### Example usage:
```url
https://timestamp-api.herokuapp.com/December%2015,%202015
https://timestamp-api.herokuapp.com/1450137600
```
#### Example output:
```json
{ "unix": 1450137600, "natural": "December 15, 2015" }
```
