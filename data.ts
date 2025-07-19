interface TableProps {
    task: string
    status: string
    due: any
    notes: string 
    assignee: string
}

export const TABLE_DATA_1: TableProps[] = [
    {
        task: "Add a new feature",
        status: "In Progress",
        due: new Date("2025/01/15"),
        notes: "This is a note",
        assignee: "Sangeet Joy"
    },
    {
        task: "Add a new feature",
        status: "In Progress",
        due: new Date("2025/01/15"),
        notes: "This is a note",
        assignee: "Koyel"
    },
    {
        task: "Write integration test",
        status: "Done",
        due: null,
        notes: "This is a note",
        assignee: "Sangeet Joy"
    },
    {
        task: "Deploy to prod",
        status: "In Review",
        due: new Date("2025/01/19"),
        notes: "",
        assignee: "Pritam ghosh"
    },
    {
        task: "Clean up database",
        status: "In Progress",
        due: new Date("2025/03/14"),
        notes: "remove old data",
        assignee: "Manish tanwar"
    },
    {
        task: "Create the lamda function",
        status: "In Review",
        due: new Date("2025/04/19"),
        notes: "deploy to AWS",
        assignee: "Raghu j"
    },
    {
        task: "Write the terraform logic",
        status: "In Progress",
        due: new Date("2025/05/19"),
        notes: "deploy to cloud",
        assignee: "Kesha patel"
    },
    {
        task: "Add the CDN logic",
        status: "Done",
        due: new Date("2025/06/19"),
        notes: "purge the cache",
        assignee: "Sangeet Joy"
    }
]