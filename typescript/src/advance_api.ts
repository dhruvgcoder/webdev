interface DataRequired {
    id: number;
    name: string;
    age: number;
    email: string;
    password: string;
}

// Pick allows to create new type using. specific set of properties from existing type and interface as well.

type UserProfile = Pick<DataRequired , 'name' | 'age' | 'email'>

const displayUserProfile = (user: UserProfile) => {
    console.log(`Name ${user.name} , Email ${user.email}`)
};


// Partial makes all entries optional 

type UserProfileOptional = Partial<UserProfile>

function updateUser(user: UserProfileOptional){
    // hit the db to update user
}

updateUser({
    name: "dhruv"
})

// Readonly

interface Config {
readonly endpoint: string;
readonly apikey: string;
}

const config: Readonly<Config>={
    endpoint: 'https://api.example.com',
    apikey: "48und4934dmin"
} // another way of making readonly which cannot be updated

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.

// Record and Map 

// record gives us cleaner types to objects

interface UserDetail {
    id:  string;
    name: string;
    age: number;
}

type Users = Record<string , UserDetail>

const userInfo = {
    "abcd123": {
        id: "abcd123",
        name: "john",
        age: 34

    },

    "efgh567" : {
        id: "efgh567",
        name: "kyoie",
        age: 22
    }
}

// Maps - even fancier way to deal with objects(key-value pairs)

interface Todos {
    title: string;
    description: string;
}

const todos = new Map<number, Todos>()

todos.set(1,{title:"ab",description:"go to gym"})
todos.set(2,{title:"cd",description:"do pushups"})

console.log(todos.get(1));

// Exclude

type Event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK