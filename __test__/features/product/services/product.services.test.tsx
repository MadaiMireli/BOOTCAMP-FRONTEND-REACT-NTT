import { BASE_URL } from "../../../../src/global";
import { getCategories } from "../../../../src/features/product/services"
import { categoriesResponseMock } from "./__mocks__/categories";

const mockFetch = (data: any, status = 200, ok = true) => {
    const fn = jest.fn().mockImplementationOnce(() => {
      const response = {
        ok,
        status,
        json: () => Promise.resolve(data),
        blob: () => Promise.resolve(data),
        clone: () => ({ ...response }),
        text: () => Promise.resolve(JSON.stringify(data)),
      };
      return Promise.resolve(response);
    });
    global.fetch = fn;
    return fn;
  };
  
  describe("CategoryServices", () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });
  
    it("should fetch categories successfully", async () => {

      const fetchMock = mockFetch(categoriesResponseMock);
  
      const response = await getCategories();

  
      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(fetchMock).toHaveBeenCalledWith(`${BASE_URL}/products/categories`);
  
      // Validar que response tenga la estructura procesada
      expect(response).toEqual(
        categoriesResponseMock.map((category) => ({
          id: category.slug,
          name: category.name,
        }))
      );
    });
  
    it("should throw an error when fetch fails", async () => {
      mockFetch({}, 500, false);
  
      await expect(getCategories()).rejects.toThrow("Error al obtener las categorías");
    });
  });
