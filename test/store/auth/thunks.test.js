import {
  loginWithEmailAndPassword,
  logoutFirebase,
  signInWithGoogle,
} from "../../../src/firebase/providers";
import {
  checkingCredentials,
  login,
  logout,
} from "../../../src/store/auth/authSlice";
import {
  checkingAuth,
  startGoogleSignIn,
  startLoginWithEmailAndPassword,
  startLogout,
} from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal/journalSlice";
import { demoUser } from "../../fixtures/authFixtures";

// Aca se esta haciendo un mock a todas las exportaciones de este archivo
jest.mock("../../../src/firebase/providers");

describe("Pruebas de Auth Thunks", () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("debe de invocar el checking credential", async () => {
    await checkingAuth()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test("startGoogleSignIn debe de llamar el checkinCredentials y login", async () => {
    const loginData = {
      ok: true,
      ...demoUser,
    };

    // Esta funcion ya es un mock, porq previamente hicimos un mock de los providers
    await signInWithGoogle.mockResolvedValue(loginData);
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startGoogleSignIn debe de llamar el checkinCredentials y logout - Error", async () => {
    const loginData = {
      ok: false,
      errorMessage: "Error en google",
    };

    // Esta funcion ya es un mock, porq previamente hicimos un mock de los providers
    await signInWithGoogle.mockResolvedValue(loginData);
    // Mandamos a llamar a nuestro thunk y cuando nuestro thunk mande a llamar al signInWithGoogle,
    // seran devueltos los valores mockeados en loginData
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });

  test("startLoginWithEmailAndPassword debe de llamar checkingCredentials y login Exito", async () => {
    const loginData = { ok: true, ...demoUser };
    const formData = { email: demoUser.email, password: "123456" };

    await loginWithEmailAndPassword.mockResolvedValue(loginData);
    await startLoginWithEmailAndPassword(formData)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startLogout debe llamar al logoutFirebase, clearNotes y logout", async () => {
    await startLogout()(dispatch);

    expect(logoutFirebase).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
    expect(dispatch).toHaveBeenCalledWith(logout());
  });
});
