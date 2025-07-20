interface TableProps {
    task: string
    status: STATUS_OBJECT
    due: any
    notes: string 
    assignee: AssigneeDetails
}

export interface AssigneeDetails {
    firstName: string;
    lastName: string;
    profileImage: string;
    role: string;
    email: string
}

export interface STATUS_OBJECT {
    name: string
    id: number
    color: string
}


const STATUS_IN_PROGRESS = {
    name: "In Progress",
    id: 1,
    color: "#ffed90"
}

const STATUS_IN_REVIEW = {
    name: "In Review",
    id: 1,
    color: "#a8eaff"
}

const STATUS_DONE = {
    name: "Done",
    id: 1,
    color: "#b6f5a9"
}

const STATUS_BLOCKED = {
    name: "Blocked",
    id: 1,
    color: "#ffc1c1"
}



export const STATUSES = [STATUS_IN_PROGRESS, STATUS_IN_REVIEW, STATUS_DONE, STATUS_BLOCKED]

export const TABLE_DATA_1: TableProps[] = [
    {
        task: "Add the live stream feature",
        status: STATUS_IN_PROGRESS,
        due: new Date("2025/01/15"),
        notes: "This is a note",
        assignee: {
            firstName: "Sangeet",
            lastName: "Joy",
            profileImage: "src/assets/joy.png",
            role: "UI Developer",
            email: "Sangeet.joy@gmail.com"
        }
    },
    {
        task: "Add a cloud integration",
        status: STATUS_IN_PROGRESS,
        due: new Date("2025/01/15"),
        notes: "This is a note",
        assignee: {
            firstName: "Koyel",
            lastName: "Bhattacharya",
            profileImage: "src/assets/koyel.png",
            role: "Data Scientist",
            email: "koyel.b@gmail.com"
        }
    },
    {
        task: "Write integration test",
        status: STATUS_DONE,
        due: null,
        notes: "This is a note",
        assignee: {
            firstName: "Koyel",
            lastName: "Bhattacharya",
            profileImage: "src/assets/koyel.png",
            role: "Data Scientist",
            email: "koyel.b@gmail.com"
        }
    },
    {
        task: "Deploy to prod",
        status: STATUS_IN_REVIEW,
        due: new Date("2025/01/19"),
        notes: "",
        assignee: {
            firstName: "Debanjan",
            lastName: "tanwar",
            profileImage: "src/assets/debanjan.png",
            role: "Backend Dev",
            email: "debanjan.t@gmail.com"
        }
    },
    {
        task: "Create the sumologic integration layer",
        status: STATUS_IN_REVIEW,
        due: new Date("2025/01/19"),
        notes: "",
        assignee: {
            firstName: "Saptarshi",
            lastName: "Roy",
            profileImage: "src/assets/saptarshi.png",
            role: "Infra dev",
            email: "sappy.r@gmail.com"
        }
    },
    {
        task: "Clean up database for customers",
        status: STATUS_DONE,
        due: new Date("2025/03/14"),
        notes: "remove old data",
        assignee: {
            firstName: "Rohan",
            lastName: "Bose",
            profileImage: "src/assets/rohan.png",
            role: "Tester",
            email: "rohan.bose@gmail.com"
        }
    },
    {
        task: "Create the lamda function",
        status: STATUS_IN_REVIEW,
        due: new Date("2025/04/19"),
        notes: "deploy to AWS",
        assignee: {
            firstName: "Debanjan",
            lastName: "Tanwar",
            profileImage: "src/assets/debanjan.png",
            role: "Backend Dev",
            email: "debanjan.t@gmail.com"
        }
    },
    {
        task: "Add the CDN network layer",
        status: STATUS_BLOCKED,
        due: new Date("2025/03/14"),
        notes: "remove old data",
        assignee: {
            firstName: "Rohan",
            lastName: "Bose",
            profileImage: "src/assets/rohan.png",
            role: "Tester",
            email: "rohan.bose@gmail.com"
        }
    },
]