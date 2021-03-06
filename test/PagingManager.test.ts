"use strict";
import { PagingUtil } from "../src/ts/lib/PagingUtil";

describe("PagingUtil テスト", () => {
	it("トータル 10 未満 中間", () => {
		const page: number = 2;
		const totalpage: number = 3;
		const result = PagingUtil.calcPagingNumber(page, totalpage);
		expect(result.open).toBe(1);
		expect(result.close).toBe(3);
		expect(result.hasPrev).toBe(false);
		expect(result.hasNext).toBe(false);
		expect(result.hasPrevSibling).toBe(true);
		expect(result.hasNextSibling).toBe(true);
	});
	it("トータル 10 未満 エッジ1", () => {
		const page: number = 1;
		const totalpage: number = 3;
		const result = PagingUtil.calcPagingNumber(page, totalpage);
		expect(result.open).toBe(1);
		expect(result.close).toBe(3);
		expect(result.hasPrev).toBe(false);
		expect(result.hasNext).toBe(false);
		expect(result.hasPrevSibling).toBe(false);
		expect(result.hasNextSibling).toBe(true);
	});
	it("トータル 10 未満 エッジ2", () => {
		const page: number = 3;
		const totalpage: number = 3;
		const result = PagingUtil.calcPagingNumber(page, totalpage);
		expect(result.open).toBe(1);
		expect(result.close).toBe(3);
		expect(result.hasPrev).toBe(false);
		expect(result.hasNext).toBe(false);
		expect(result.hasPrevSibling).toBe(true);
		expect(result.hasNextSibling).toBe(false);
	});
	it("トータル ちょうど 10 中間", () => {
		const page: number = 3;
		const totalpage: number = 10;
		const result = PagingUtil.calcPagingNumber(page, totalpage);
		expect(result.open).toBe(1);
		expect(result.close).toBe(10);
		expect(result.hasPrev).toBe(false);
		expect(result.hasNext).toBe(false);
		expect(result.hasPrevSibling).toBe(true);
		expect(result.hasNextSibling).toBe(true);
	});
	it("トータル ちょうど 10 エッジ1", () => {
		const page: number = 1;
		const totalpage: number = 10;
		const result = PagingUtil.calcPagingNumber(page, totalpage);
		expect(result.open).toBe(1);
		expect(result.close).toBe(10);
		expect(result.hasPrev).toBe(false);
		expect(result.hasNext).toBe(false);
		expect(result.hasPrevSibling).toBe(false);
		expect(result.hasNextSibling).toBe(true);
	});
	it("トータル ちょうど 10 エッジ2", () => {
		const page: number = 10;
		const totalpage: number = 10;
		const result = PagingUtil.calcPagingNumber(page, totalpage);
		expect(result.open).toBe(1);
		expect(result.close).toBe(10);
		expect(result.hasPrev).toBe(false);
		expect(result.hasNext).toBe(false);
		expect(result.hasPrevSibling).toBe(true);
		expect(result.hasNextSibling).toBe(false);
	});
	it("トータル 10 以上 中間1", () => {
		const page: number = 2;
		const totalpage: number = 15;
		const result = PagingUtil.calcPagingNumber(page, totalpage);
		expect(result.open).toBe(1);
		expect(result.close).toBe(10);
		expect(result.hasPrev).toBe(false);
		expect(result.hasNext).toBe(true);
		expect(result.hasPrevSibling).toBe(true);
		expect(result.hasNextSibling).toBe(true);
	});
	it("トータル 10 以上 中間2", () => {
		const page: number = 12;
		const totalpage: number = 15;
		const result = PagingUtil.calcPagingNumber(page, totalpage);
		expect(result.open).toBe(11);
		expect(result.close).toBe(15);
		expect(result.hasPrev).toBe(true);
		expect(result.hasNext).toBe(false);
		expect(result.hasPrevSibling).toBe(true);
		expect(result.hasNextSibling).toBe(true);
	});
	it("トータル 10 以上 エッジ1", () => {
		const page: number = 1;
		const totalpage: number = 15;
		const result = PagingUtil.calcPagingNumber(page, totalpage);
		expect(result.open).toBe(1);
		expect(result.close).toBe(10);
		expect(result.hasPrev).toBe(false);
		expect(result.hasNext).toBe(true);
		expect(result.hasPrevSibling).toBe(false);
		expect(result.hasNextSibling).toBe(true);
	});
	it("トータル 10 以上 エッジ2", () => {
		const page: number = 10;
		const totalpage: number = 15;
		const result = PagingUtil.calcPagingNumber(page, totalpage);
		expect(result.open).toBe(1);
		expect(result.close).toBe(10);
		expect(result.hasPrev).toBe(false);
		expect(result.hasNext).toBe(true);
		expect(result.hasPrevSibling).toBe(true);
		expect(result.hasNextSibling).toBe(true);
	});
	it("トータル 10 以上 エッジ3", () => {
		const page: number = 11;
		const totalpage: number = 15;
		const result = PagingUtil.calcPagingNumber(page, totalpage);
		expect(result.open).toBe(11);
		expect(result.close).toBe(15);
		expect(result.hasPrev).toBe(true);
		expect(result.hasNext).toBe(false);
		expect(result.hasPrevSibling).toBe(true);
		expect(result.hasNextSibling).toBe(true);
	});
	it("トータル 10 以上 エッジ4", () => {
		const page: number = 15;
		const totalpage: number = 15;
		const result = PagingUtil.calcPagingNumber(page, totalpage);
		expect(result.open).toBe(11);
		expect(result.close).toBe(15);
		expect(result.hasPrev).toBe(true);
		expect(result.hasNext).toBe(false);
		expect(result.hasPrevSibling).toBe(true);
		expect(result.hasNextSibling).toBe(false);
	});
	it("トータル 10 以上 エッジ5", () => {
		const page: number = 10;
		const totalpage: number = 11;
		const result = PagingUtil.calcPagingNumber(page, totalpage);
		expect(result.open).toBe(1);
		expect(result.close).toBe(10);
		expect(result.hasPrev).toBe(false);
		expect(result.hasNext).toBe(true);
		expect(result.hasPrevSibling).toBe(true);
		expect(result.hasNextSibling).toBe(true);
	});
	it("トータル 10 以上 エッジ5", () => {
		const page: number = 11;
		const totalpage: number = 11;
		const result = PagingUtil.calcPagingNumber(page, totalpage);
		expect(result.open).toBe(11);
		expect(result.close).toBe(11);
		expect(result.hasPrev).toBe(true);
		expect(result.hasNext).toBe(false);
		expect(result.hasPrevSibling).toBe(true);
		expect(result.hasNextSibling).toBe(false);
	});
	it("トータル ちょうど 20 中間1", () => {
		const page: number = 5;
		const totalpage: number = 20;
		const result = PagingUtil.calcPagingNumber(page, totalpage);
		expect(result.open).toBe(1);
		expect(result.close).toBe(10);
		expect(result.hasPrev).toBe(false);
		expect(result.hasNext).toBe(true);
		expect(result.hasPrevSibling).toBe(true);
		expect(result.hasNextSibling).toBe(true);
	});
	it("トータル ちょうど 20 中間2", () => {
		const page: number = 15;
		const totalpage: number = 20;
		const result = PagingUtil.calcPagingNumber(page, totalpage);
		expect(result.open).toBe(11);
		expect(result.close).toBe(20);
		expect(result.hasPrev).toBe(true);
		expect(result.hasNext).toBe(false);
		expect(result.hasPrevSibling).toBe(true);
		expect(result.hasNextSibling).toBe(true);
	});
	it("トータル ちょうど 20 エッジ1", () => {
		const page: number = 1;
		const totalpage: number = 20;
		const result = PagingUtil.calcPagingNumber(page, totalpage);
		expect(result.open).toBe(1);
		expect(result.close).toBe(10);
		expect(result.hasPrev).toBe(false);
		expect(result.hasNext).toBe(true);
		expect(result.hasPrevSibling).toBe(false);
		expect(result.hasNextSibling).toBe(true);
	});
	it("トータル ちょうど 20 エッジ2", () => {
		const page: number = 10;
		const totalpage: number = 20;
		const result = PagingUtil.calcPagingNumber(page, totalpage);
		expect(result.open).toBe(1);
		expect(result.close).toBe(10);
		expect(result.hasPrev).toBe(false);
		expect(result.hasNext).toBe(true);
		expect(result.hasPrevSibling).toBe(true);
		expect(result.hasNextSibling).toBe(true);
	});
	it("トータル ちょうど 20 エッジ3", () => {
		const page: number = 11;
		const totalpage: number = 20;
		const result = PagingUtil.calcPagingNumber(page, totalpage);
		expect(result.open).toBe(11);
		expect(result.close).toBe(20);
		expect(result.hasPrev).toBe(true);
		expect(result.hasNext).toBe(false);
		expect(result.hasPrevSibling).toBe(true);
		expect(result.hasNextSibling).toBe(true);
	});
	it("トータル ちょうど 20 エッジ4", () => {
		const page: number = 20;
		const totalpage: number = 20;
		const result = PagingUtil.calcPagingNumber(page, totalpage);
		expect(result.open).toBe(11);
		expect(result.close).toBe(20);
		expect(result.hasPrev).toBe(true);
		expect(result.hasNext).toBe(false);
		expect(result.hasPrevSibling).toBe(true);
		expect(result.hasNextSibling).toBe(false);
	});
	// prev, next 用テスト
	it("[prev/next] 10 未満 中間", () => {
		const page: number = 2;
		const totalpage: number = 5;
		const result1: number = PagingUtil.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingUtil.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingUtil.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingUtil.calcPrevNextPage(page, totalpage, -10);
		expect(result1).toBe(3);
		expect(result2).toBe(5);
		expect(result3).toBe(1);
		expect(result4).toBe(1);
	});
	it("[prev/next] 10 未満 エッジ1", () => {
		const page: number = 1;
		const totalpage: number = 5;
		const result1: number = PagingUtil.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingUtil.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingUtil.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingUtil.calcPrevNextPage(page, totalpage, -10);
		expect(result1).toBe(2);
		expect(result2).toBe(5);
		expect(result3).toBe(1);
		expect(result4).toBe(1);
	});
	it("[prev/next] 10 未満 エッジ2", () => {
		const page: number = 5;
		const totalpage: number = 5;
		const result1: number = PagingUtil.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingUtil.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingUtil.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingUtil.calcPrevNextPage(page, totalpage, -10);
		expect(result1).toBe(5);
		expect(result2).toBe(5);
		expect(result3).toBe(4);
		expect(result4).toBe(1);
	});
	it("[prev/next] just 10 中間", () => {
		const page: number = 5;
		const totalpage: number = 10;
		const result1: number = PagingUtil.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingUtil.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingUtil.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingUtil.calcPrevNextPage(page, totalpage, -10);
		expect(result1).toBe(6);
		expect(result2).toBe(10);
		expect(result3).toBe(4);
		expect(result4).toBe(1);
	});
	it("[prev/next] just 10 エッジ1", () => {
		const page: number = 1;
		const totalpage: number = 10;
		const result1: number = PagingUtil.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingUtil.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingUtil.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingUtil.calcPrevNextPage(page, totalpage, -10);
		expect(result1).toBe(2);
		expect(result2).toBe(10);
		expect(result3).toBe(1);
		expect(result4).toBe(1);
	});
	it("[prev/next] just 10 エッジ2", () => {
		const page: number = 10;
		const totalpage: number = 10;
		const result1: number = PagingUtil.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingUtil.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingUtil.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingUtil.calcPrevNextPage(page, totalpage, -10);
		expect(result1).toBe(10);
		expect(result2).toBe(10);
		expect(result3).toBe(9);
		expect(result4).toBe(1);
	});
	it("[prev/next] 10 以上 中間1", () => {
		const page: number = 4;
		const totalpage: number = 15;
		const result1: number = PagingUtil.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingUtil.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingUtil.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingUtil.calcPrevNextPage(page, totalpage, -10);
		expect(result1).toBe(5);
		expect(result2).toBe(14);
		expect(result3).toBe(3);
		expect(result4).toBe(1);
	});
	it("[prev/next] 10 以上 中間2", () => {
		const page: number = 6;
		const totalpage: number = 15;
		const result1: number = PagingUtil.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingUtil.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingUtil.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingUtil.calcPrevNextPage(page, totalpage, -10);
		expect(result1).toBe(7);
		expect(result2).toBe(15);
		expect(result3).toBe(5);
		expect(result4).toBe(1);
	});
	it("[prev/next] 10 以上 中間3", () => {
		const page: number = 12;
		const totalpage: number = 15;
		const result1: number = PagingUtil.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingUtil.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingUtil.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingUtil.calcPrevNextPage(page, totalpage, -10);
		expect(result1).toBe(13);
		expect(result2).toBe(15);
		expect(result3).toBe(11);
		expect(result4).toBe(2);
	});
	it("[prev/next] 10 以上 エッジ1", () => {
		const page: number = 5;
		const totalpage: number = 15;
		const result1: number = PagingUtil.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingUtil.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingUtil.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingUtil.calcPrevNextPage(page, totalpage, -10);
		expect(result1).toBe(6);
		expect(result2).toBe(15);
		expect(result3).toBe(4);
		expect(result4).toBe(1);
	});
	it("[prev/next] 10 以上 エッジ2", () => {
		const page: number = 1;
		const totalpage: number = 15;
		const result1: number = PagingUtil.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingUtil.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingUtil.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingUtil.calcPrevNextPage(page, totalpage, -10);
		expect(result1).toBe(2);
		expect(result2).toBe(11);
		expect(result3).toBe(1);
		expect(result4).toBe(1);
	});
	it("[prev/next] 10 以上 エッジ3", () => {
		const page: number = 15;
		const totalpage: number = 15;
		const result1: number = PagingUtil.calcPrevNextPage(page, totalpage, 1);
		const result2: number = PagingUtil.calcPrevNextPage(page, totalpage, 10);
		const result3: number = PagingUtil.calcPrevNextPage(page, totalpage, -1);
		const result4: number = PagingUtil.calcPrevNextPage(page, totalpage, -10);
		expect(result1).toBe(15);
		expect(result2).toBe(15);
		expect(result3).toBe(14);
		expect(result4).toBe(5);
	});
});
