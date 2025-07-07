import User  from "./user"
import Photo from "./photo"
import Like from "./like"
import Comment from "./comment"
import Token from "./token"

User.sync({ alter: true })
Photo.sync({ alter: true })
Like.sync({ alter: true })
Comment.sync({alter: true })
Token.sync({ alter: true })

export default {
    User, Photo, Like, Comment, Token
}