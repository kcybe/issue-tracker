import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import React from 'react';


import { labels, priorities, statuses } from '../data/data';

function createData(
    id: number,
    title: string,
    description: string,
    status: "open" | "closed" | "in progress" | "todo",
    priority: "high" | "medium" | "low",
    opened_by: string,
    timestamp: number,
  ) {
    return { id, title, description, status, priority, opened_by, timestamp };
  }

function timestampToDateTime(timestamp: number) {
    var a = new Date(timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;

}
const rows = [
createData(1, "Issue Number One", "This is a description of issue number one", "open", "high", "Noam", 1703020928),
createData(2, "Issue Number Two", "This is a description of issue number two", "closed", "medium", "Moshe", 1703020928),
createData(3, "Issue Number Three", "This is a description of issue number three", "in progress", "low", "Bobby", 1703020928),
createData(4, "Issue Number Four", "This is a description of issue number four", "todo", "low", "User", 1703020928),
createData(5, "Issue Number Five", "This is a description of issue number five", "todo", "low", "Rick", 1703020928),
createData(6, "Issue Number Five", "This is a description of issue number five", "todo", "low", "Rick", 1703020928),
createData(7, "Issue Number Five", "This is a description of issue number five", "todo", "low", "Rick", 1703020928),
createData(8, "Issue Number Five", "This is a description of issue number five", "todo", "low", "Rick", 1703020928),
createData(9, "Issue Number Five", "This is a description of issue number five", "todo", "low", "Rick", 1703020928),
createData(10, "Issue Number Five", "This is a description of issue number five", "todo", "low", "Rick", 1703020928),
];

function getData(dataType: string, statusValue: string) {
    switch(dataType) {
        case 'status':
            const status = statuses.find((s) => s.value === statusValue);

            if (status) {
                console.log(status.icon)
                return {
                label: status.label,
                icon: status.icon,
                };
            } else {
                return {
                label: "Unknown",
                icon: null,
                };
            }
            case 'priority':
                const priority = priorities.find((s) => s.value === statusValue);
    
                if (priority) {
                    console.log(priority.icon)
                    return {
                    label: priority.label,
                    icon: priority.icon,
                    };
                } else {
                    return {
                    label: "Unknown",
                    icon: null,
                    };
                }
            

    } 
}

export default function IssuesTable() {
    return (
        <Sheet sx={{height: 500, overflow: 'auto'}}>
        <Table
        borderAxis="xBetween"
        color="neutral"
        size="md"
        stickyFooter
        stickyHeader
        variant="plain"
        >
            <thead>
            <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Opened By</th>
            <th>Time</th>
            </tr>
        </thead>
        <tbody>
            {rows.map((row) => (
            <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.title}</td>
                <td>{row.description}</td>
                {/* <td>{`${getData('status', row.status)?.icon} ${getData('status', row.status)?.label}`}</td> */}
                <td>
                    {React.createElement(
                    getData('status', row.status)?.icon as React.ComponentType<React.SVGProps<SVGSVGElement>>,
                    {
                        style: { fontSize: '14' }, // Adjust the size as needed
                    }
                    )}{' '}
                    {getData('status', row.status)?.label}
                </td>
                {/* <td>{row.status}</td> */}
                <td>
                    {React.createElement(
                    getData('priority', row.priority)?.icon as React.ComponentType<React.SVGProps<SVGSVGElement>>,
                    {
                        style: { fontSize: '14' }, // Adjust the size as needed
                    }
                    )}{' '}
                    {getData('priority', row.priority)?.label}
                </td>
                <td>{row.opened_by}</td>
                <td>{timestampToDateTime(row.timestamp)}</td>
            </tr>
            ))}
        </tbody>
        <tfoot>
            <tr>
              <td colSpan={7} style={{ textAlign: 'center' }}>
                Total Open Issues NUMBER
              </td>
            </tr>
          </tfoot>

        </Table>
        </Sheet>
    )
}