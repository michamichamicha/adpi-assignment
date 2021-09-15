## adpi-assignment
### How to run
```
npm install
./node_modules/jest/bin/jest.js
```

I worked on this for 3 hours and still wanted to implement more functionality and tests, but I think it gives you a better understanding of my work to see the result after 3 hours.

The validator can be extended with more datatypes by simply creating new datatypes in the validator/datatypes/ folder and extending the validator/datatypes/index.js file. 
If the schema is referencing a non-existing datatype, it simple throws an error.

I also added some example code in the example.js. Can be run with:
```
node -r esm example.js
```
