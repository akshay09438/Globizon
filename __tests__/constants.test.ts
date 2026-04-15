import { STATS, PACKAGES, TESTIMONIALS, FAQS } from "../src/lib/constants";

describe("constants", () => {
  it("has 4 stats each with num and label", () => {
    expect(STATS).toHaveLength(4);
    STATS.forEach((s) => {
      expect(s).toHaveProperty("num");
      expect(s).toHaveProperty("label");
    });
  });

  it("has 3 packages with required fields", () => {
    expect(PACKAGES).toHaveLength(3);
    PACKAGES.forEach((p) => {
      expect(p).toHaveProperty("tier");
      expect(p).toHaveProperty("name");
      expect(p).toHaveProperty("description");
      expect(p).toHaveProperty("features");
      expect(p.features.length).toBeGreaterThan(0);
    });
  });

  it("marks exactly one package as featured", () => {
    const featured = PACKAGES.filter((p) => p.featured);
    expect(featured).toHaveLength(1);
  });

  it("has 4 testimonials each with quote, author, meta", () => {
    expect(TESTIMONIALS).toHaveLength(4);
    TESTIMONIALS.forEach((t) => {
      expect(t).toHaveProperty("quote");
      expect(t).toHaveProperty("author");
      expect(t).toHaveProperty("meta");
    });
  });

  it("has 5 FAQs each with q and a", () => {
    expect(FAQS).toHaveLength(5);
    FAQS.forEach((f) => {
      expect(f).toHaveProperty("q");
      expect(f).toHaveProperty("a");
    });
  });
});
