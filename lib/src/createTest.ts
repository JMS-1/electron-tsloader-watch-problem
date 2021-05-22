import { helper, ISomeTest } from "api"

export function createTest(data = helper.one): ISomeTest {
    return { data }
}