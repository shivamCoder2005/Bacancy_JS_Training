type User = {
    name: string
}

const jsonstring = `{"name2":"shivam"}`;
const data: unknown = JSON.parse(jsonstring)

const myUser = data as User

console.log(myUser.name)