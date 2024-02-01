import { error, type Load } from "@sveltejs/kit"
import { dev } from '$app/environment';

export const load: Load = () => {
    if (dev) {
        error(404)
    }
   return {};
}
