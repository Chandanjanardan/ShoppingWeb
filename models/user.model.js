const  mongoose =require( 'mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true,'all fields are required'],
        trim: true,
        maxlength: [12, 'username cannot be more than 12 characters']
    },
    phone: {
        type: Number,
        required: [true,'all fields are required'],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true,'all fields are required'],
        trim: true,
        minlength: [8, 'password ahould be atleast 8 characters']
    },
  })

const userModel = new mongoose.model('user', UserSchema)


module.exports = userModel