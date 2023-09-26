class Endpoints {
  static API_VERSION = "v1";
  static LOCAL_BASE_ROOT = "http://localhost:8000";
  static REMOTE_BASE_ROOT = "https://nft-assets-ivory.vercel.app";
  static LOCAL_BASE = `${this.LOCAL_BASE_ROOT}/${this.API_VERSION}`;
  static REMOTE_BASE = `${this.REMOTE_BASE_ROOT}/${this.API_VERSION}`;
  static BASE_URL = this.REMOTE_BASE;
  static REGISTER = `${this.BASE_URL}/account/register`;
  static LAUNCHPAD_CREATE_PACKAGE = `${this.BASE_URL}/launchpad/create`;
  static UPLOAD_IMAGE = `${this.BASE_URL}/files/upload`;
}

export default Endpoints;
