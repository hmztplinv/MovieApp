import { Category } from "./category";

export class CategoryRepository {
    private categories: Category[];

    constructor() {
        this.categories = [
            { id: 1, name: "Mystery" },
            { id: 2, name: "Drama" },
            { id: 3, name: "Comedy" },
            { id: 4, name: "Action" },
            { id: 5, name: "Adventure" },
            { id: 6, name: "Horror" }
        ];
    }

    getCategories(): Category[] {
        return this.categories;
    }

    getCategoryById(id: number): Category | undefined {
        return this.categories.find(i => i.id === id);
    }
}