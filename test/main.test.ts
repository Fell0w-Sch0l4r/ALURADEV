import { describe, expect, it } from "vitest";
import {
    addHtmlElementClass,
    removeHtmlElementClass,
} from "../src/ts/main"; // Update the path accordingly


describe("DOM manipulation functions", () => {
    it("adds a class to an element", () => {
        const div = document.createElement("div");
        addHtmlElementClass(div, "test-class");
        expect(div.classList.contains("test-class")).toBe(true);
    });

    it("removes a class from an element", () => {
        const div = document.createElement("div");
        div.classList.add("test-class");
        removeHtmlElementClass(div, "test-class");
        expect(div.classList.contains("test-class")).toBe(false);
    });
});