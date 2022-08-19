import { render, screen } from "@testing-library/react"
import Course from "./Course";
import '@testing-library/jest-dom';


it('render the text', async () => {
    let infoElement:HTMLSpanElement;
    render(<Course />);
    infoElement = screen.getByText(/German/i);
    expect(infoElement).toBeInTheDocument();
});

it('render the title', async () => {
    render(<Course />);
    const infoElement = screen.getByTitle('My Courses');
    expect(infoElement).toBeInTheDocument();
});

it('render the paragraph element by id', async () => {
    render(<Course />);
    const infoElement = screen.getByTestId('course-section');
    expect(infoElement).toBeInTheDocument();
});

// find by

it('render the find by Empower Your future text', async () => {
    render(<Course />);
    const infoElement =  await screen.findByText(/20 March 2020/i);
    expect(infoElement).toBeInTheDocument();
});

// query by

it('render some text', async () => {
    render(<Course />);
    const infoElement = screen.queryByText(/Listening - Beginner Topic 1/i);
    expect(infoElement).toBeInTheDocument();
});