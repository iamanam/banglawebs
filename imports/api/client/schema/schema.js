/**
 * Created by iaman on 5/17/2016.
 */
import {Mongo} from "meteor/mongo";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
Products = new Mongo.Collection('products');


ProductsSchema = new SimpleSchema({
    title: {
        type: String,
        label: 'Title',
        max: 200
    },
    brand: {
        type: String,
        label: 'Brand'
    },
    Model: {
        type: String,
        label: 'Model number',
        min: 3
    },
    imageUrl: {
        type: String,
        label: 'Image url',
        regEx: SimpleSchema.RegEx.Url
    },
    productUrl: {
        type: String,
        label: 'Orginial page url',
        regEx: SimpleSchema.RegEx.Url
    },
    price: {
        type: Number,
        label: 'Price in rupee'
    },
    Stock: {
        type: Number,
        label: 'item in stock',
        min: 0
    },
    summary: {
        type: String,
        label: 'Brief summary',
        optional: true,
        max: 1000
    }
});
Products.attachSchema(ProductsSchema);
