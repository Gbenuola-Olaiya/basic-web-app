import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return andrew id', () => {
        const query = "id"
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "golaiya"
        ));
    });

    test('should return name', () => {
        const query = "name"
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Gbenu"
        ));
    });

    test('should add numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });

    test('should double add numbers', () => {
        console.log(QueryProcessor("What is 5 plus 52 plus 1?"))
        expect(QueryProcessor("What is 5 plus 52 plus 1?")).toEqual("58");
    });

    test('should subtract numbers', () => {
        expect(QueryProcessor("What is 5 minus 52?")).toEqual("-47");
        expect(QueryProcessor("What is 12 minus 1?")).toEqual("11");
    });

    test('should multiply numbers', () => {
        expect(QueryProcessor("What is 5 multiplied by 7?")).toEqual("35");
        expect(QueryProcessor("What is 12 multiplied by 1?")).toEqual("12");
    });

    test('should output max', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 11, 18, 51?")).toEqual("51");
    });
});