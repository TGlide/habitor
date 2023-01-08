type FormDataToObjectOptions = {
	transformers?: Record<string, (v: unknown) => unknown>;
	defaultValues?: Record<string, unknown>;
};

export function formDataToObject(
	formData: FormData,
	options: FormDataToObjectOptions = {},
): Record<string, unknown> {
	const { transformers = {}, defaultValues = {} } = options;

	const obj: Record<string, unknown> = defaultValues;
	for (const [key, value] of formData.entries()) {
		if (transformers && key in transformers) {
			obj[key] = transformers[key](value);
		} else {
			obj[key] = value;
		}
	}
	return obj;
}
