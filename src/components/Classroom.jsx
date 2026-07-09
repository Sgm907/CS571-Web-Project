import { useEffect, useState, useRef } from "react";
import { Button, Container, Form, Row, Col, Pagination } from "react-bootstrap";
import Student from "./Student";

const maxStudents = 24;

const Classroom = () => {
    // Is there a better way to do this? We'll explore this today!
    const [students, setStudents] = useState([]);
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState({
        "name": "",
        "major": "",
        "interests": ""
    });
    let studentDisplay = filterStudents(students, filters.name, filters.major, filters.interests);

    let items = [];
    for (let pageNumber = 1; pageNumber <= Math.ceil(studentDisplay.length / maxStudents); pageNumber++) {
        items.push(
            <Pagination.Item
                key={pageNumber}
                active={page === pageNumber}
                onClick={() => setPage(pageNumber)}
            >
                {pageNumber}
            </Pagination.Item>,
        );
    }

    function updateFilters(filter, value) {
        if (filter == "reset") {
            setFilters({
                "name": "",
                "major": "",
                "interests": ""
            });
        }
        else {
            let newFilters = { ...filters }
            newFilters[filter] = value;
            setFilters(newFilters);
        }
        setPage(1);
    }

    useEffect(() => {
        fetch("https://cs571api.cs.wisc.edu/rest/su26/hw4/students", {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
            .then(res => {
                if (res.status === 200 || res.status === 304) {
                    return res.json()
                } else {
                    throw new Error(res.status);
                }
            })
            .then(data => {
                console.log(data);
                setStudents(data);
            })
    }, []);

    return <div>
        <h1>Badger Book</h1>
        <p>Search for students below!</p>
        <hr />
        <Form>
            <Form.Label htmlFor="searchName">Name</Form.Label>
            <Form.Control
                id="searchName"
                onChange={(e) => { updateFilters("name", e.target.value) }}
                value={filters.name}
            />
            <Form.Label htmlFor="searchMajor">Major</Form.Label>
            <Form.Control
                id="searchMajor"
                onChange={(e) => { updateFilters("major", e.target.value) }}
                value={filters.major}
            />
            <Form.Label htmlFor="searchInterest">Interest</Form.Label>
            <Form.Control
                id="searchInterest"
                onChange={(e) => { updateFilters("interests", e.target.value) }}
                value={filters.interests}
            />
            <br />
            <Button variant="neutral" onClick={() => { updateFilters("reset") }}>Reset Search</Button>
        </Form>
        <Container fluid>
            <p id="num-results">There are {studentDisplay.length} student(s) matching your search.</p>
            <Row id='students'>
                {
                    studentDisplay.slice((page - 1) * maxStudents, page * maxStudents).map((student) => <Col xs="12" md="6" lg="4" xl="3" key={student.id}>
                        <Student {...student} setFilter={updateFilters} />
                    </Col>)
                }
            </Row>
        </Container>
        <Pagination id="studentPage">
            <Pagination.Prev
                disabled={(page === 1 || studentDisplay.length === 0)}
                onClick={() => setPage(page - 1)}
            >
                Previous
            </Pagination.Prev>
            {items}
            <Pagination.Next
                disabled={(page >= Math.ceil(studentDisplay.length / maxStudents) || studentDisplay.length === 0)}
                onClick={() => setPage(page + 1)}
            >
                Next
            </Pagination.Next>
        </Pagination>
    </div>

}

function stringContainsOrNull(str, sub) {
    if (str == null || sub == null) return true; //Don't pass for 
    return str.toLowerCase().includes(sub.toLowerCase().trim());
}

function filterStudents(students, name, major, interests) {
    return students.filter((student) => {
        let passed = true;
        if (!stringContainsOrNull(`${student.name.first} ${student.name.last}`, name)) passed = false;
        else if (!stringContainsOrNull(student.major, major)) passed = false;
        else {
            let hasInterest = false;
            student.interests.forEach((interest) => {
                if (stringContainsOrNull(interest, interests)) hasInterest = true;
            })
            passed = hasInterest
        }
        return passed;
    });
}

export default Classroom;