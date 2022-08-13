export default {
    name : "comment",
    type : "document",
    title : "Comment",
    fields : [
        {
            name : "name",
            type : "string"
        },
        {
            title : "Approved",
            name : "approved",
            type : "boolean",
            description : "Coment wont be shown before being approved"
        },
        {
            name : "email",
            type : "string"
        },
        {
            name : "comment",
            type : "text"
        },
        {
            name : "post",
            type : "reference",
            to: [{ type : "post" }]
        }
    ]
}