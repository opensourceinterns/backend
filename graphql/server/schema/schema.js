const graphql = require('graphql');
const _ = require('lodash');

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

/* Schema
-define objects
-define relationship between objects
-define root queries 
*/

// dummy data
// we will use MongoDB to store actual data later on

var books = [
	{
		name: 'Name of Wind', 
		genre: 'Fantasy', 
		id: '1'
	},
	{
		name: 'Final Empire',
		genre: 'Fantasy', 
		id: '2'},
	{
		name: 'Long of Earth',
		genre: 'Fantasy', 
		id: '3'
	}
]


// GraphQL Object
const BookType = new GraphQLObjectType({
	name: 'Book',
	fields: () => ({
		id: {type: GraphQLString},
		name: {type: GraphQLString},
		genre: {type: GraphQLString}
	})
});

// Entry point into the Graph
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		book: {
			type: BookType,
			args: {id: {type: GraphQLString}},
			resolve(parent, args) {
				// code to get data from db / other source
				return _.find(books, {id: args.id});
			}
		}
	}
});
// What the query looks like on GraphiQL: 

/*
book(id: '123') {
	name
	genre
}
*/



module.exports = new GraphQLSchema({
	query: RootQuery
});

