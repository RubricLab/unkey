import { randomUUID } from "crypto";
import { runCommonRouteTests } from "@/pkg/testutil/common-tests";
import { RouteHarness } from "@/pkg/testutil/route-harness";
import { describe, expect, test } from "vitest";
import { V1ApisCreateApiRequest, V1ApisCreateApiResponse } from "./v1_apis_createApi";

runCommonRouteTests<V1ApisCreateApiRequest>({
  prepareRequest: () => ({
    method: "POST",
    url: "/v1/apis.createApi",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      name: randomUUID(),
    },
  }),
});
describe("correct roles", () => {
  test.each([
    { name: "legacy", roles: ["*"] },
    { name: "legacy and more", roles: ["*", randomUUID()] },
    { name: "wildcard", roles: ["api.*.create_api"] },
    { name: "wildcard and more", roles: ["api.*.create_api", randomUUID()] },
  ])("$name", async ({ roles }) => {
    const h = await RouteHarness.init();
    const root = await h.createRootKey(roles);

    const res = await h.post<V1ApisCreateApiRequest, V1ApisCreateApiResponse>({
      url: "/v1/apis.createApi",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${root.key}`,
      },
      body: {
        name: randomUUID(),
      },
    });
    expect(res.status).toEqual(200);

    const found = await h.db.query.apis.findFirst({
      where: (table, { eq }) => eq(table.id, res.body.apiId),
    });
    expect(found).toBeDefined();
  });
});
