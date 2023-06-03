const {buildSchema}=require('graphql');

module.exports=buildSchema(`
type Testdata{
    hello:String
    views:Int

}
 schema{

    query:Testdata
 }
`);