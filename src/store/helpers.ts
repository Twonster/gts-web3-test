import { ErrorType } from 'src/types/global';

interface SuccessResponseWrapper<T> {
  ok: true;
  data: T;
}

interface ErrorResponseWrapper {
  ok: false;
  message?: string;
  name?: string;
}

export const typedFetchWrapper = async <T extends Function>(
  fetcher: T
): Promise<SuccessResponseWrapper<Awaited<T>> | ErrorResponseWrapper> => {
  try {
    return {
      ok: true,
      data: await fetcher()
    };
  } catch (e) {
    const error = e as ErrorType;
    return {
      ok: false,
      message: error?.message ?? '',
      name: error?.name ?? ''
    };
  }
};
