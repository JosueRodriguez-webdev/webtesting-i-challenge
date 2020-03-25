const enhancer = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {
  describe(".succeed()", () => {
    test("returns item", () => {
      const item = {
        name: "sword",
        enhancement: 15,
        durability: 88
      };
      const success = enhancer.succeed(item);
      expect(success).toBeTruthy();
    });

    test("increases enhancement by 1", () => {
      const item = {
        name: "sword",
        enhancement: 15,
        durability: 88
      };

      const updated = {
        name: "sword",
        enhancement: 16,
        durability: 88
      };
      const success = enhancer.succeed(item);
      expect(success).toEqual(updated);
    });

    test("enhancement caps at 20", () => {
      const item = {
        name: "sword",
        enhancement: 20,
        durability: 88
      };

      const updated = {
        name: "sword",
        enhancement: 20,
        durability: 88
      };

      const success = enhancer.succeed(item);
      expect(success).toEqual(updated);
    });
  });

  describe(".fail()", () => {
    test("enhancement below 15 results in loss of 5 durability", () => {
      const item = {
        name: "sword",
        enhancement: 10,
        durability: 85
      };

      const updated = {
        name: "sword",
        enhancement: 10,
        durability: 80
      };

      const fail = enhancer.fail(item);
      expect(fail).toEqual(updated);
    });

    test("enhancement at 15 results in loss of 10 durability", () => {
      const item = {
        name: "sword",
        enhancement: 15,
        durability: 85
      };

      const updated = {
        name: "sword",
        enhancement: 15,
        durability: 75
      };

      const fail = enhancer.fail(item);
      expect(fail).toEqual(updated);
    });

    test("enhancement at 16 results in loss of 1 enhancement level and 10 durability", () => {
      const item = {
        name: "sword",
        enhancement: 16,
        durability: 85
      };

      const updated = {
        name: "sword",
        enhancement: 15,
        durability: 75
      };

      const fail = enhancer.fail(item);
      expect(fail).toEqual(updated);
    });
  });

  describe(".repair()", () => {
    test("restores durability to 100", () => {
      const item = {
        name: "sword",
        enhancement: 10,
        durability: 20
      };

      const updated = {
        name: "sword",
        enhancement: 10,
        durability: 100
      };

      const repair = enhancer.repair(item);
      expect(repair).toEqual(updated);
    });
  });
});
