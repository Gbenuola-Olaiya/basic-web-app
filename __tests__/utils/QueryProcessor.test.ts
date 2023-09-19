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

    test('should return 103', () => {
        const query = "14 plus 89"
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "103"
        ));
    });
});