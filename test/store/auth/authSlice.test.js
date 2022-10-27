import {
  authSlice,
  checkingCredentials,
  login,
  logout,
} from "../../../src/store/auth/authSlice";
import {
  demoUser,
  initialState,
  authenticatedState,
  notAuthenticatedState,
} from "../../fixtures/authFixtures";

describe("Pruebas en el authSlice", () => {
  test("debe de regresar el estado inicial y llamarse auth", () => {
    const state = authSlice.reducer(initialState, {});

    expect(authSlice.name).toBe("auth");
    expect(state).toEqual(initialState);
  });

  test("debe realizar la autenticacion", () => {
    // Llamamos el reducer con una determinada action y esperamos un determinado estado
    const state = authSlice.reducer(initialState, login(demoUser));

    expect(state).toEqual({
      status: "authenticated", // 'checking', 'not-authenticated', 'authenticated'
      ...demoUser,
      errorMessage: null,
    });
  });

  test("debe realizar el logout", () => {
    // authenticatedState // logout sin argumentos
    const state = authSlice.reducer(authenticatedState, logout());

    expect(state).toEqual({
      displayName: null,
      email: null,
      errorMessage: undefined,
      photoURL: null,
      status: "not-authenticated",
      uid: null,
    });
  });

  test("debe realizar el logout y mostrar un mensaje de error", () => {
    // authenticatedState // logout sin argumentos
    const errorMessage = "Credenciales no son correctas";

    const state = authSlice.reducer(
      authenticatedState,
      logout({ errorMessage })
    );

    expect(state).toEqual({ ...notAuthenticatedState, errorMessage });
    expect(state.errorMessage).toBe(errorMessage);
  });

  test("debe de cambiar el estado a checking", () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials());

    expect(state.status).toBe("checking");
  });
});
