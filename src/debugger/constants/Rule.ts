import {RequestMethods} from './RequestMethods';
import {RequestTypes} from './RequestTypes';
import {UrlCompareTypes} from './UrlCompareTypes';
import {CancelReasons} from './CancelReasons';
import {RequestBodyTypes} from './RequestBodyTypes';

export interface RuleData {
	filter: {
		url: {
			type: UrlCompareTypes;
			value: string | RegExp;
		};
		requestTypes: RequestTypes[];
		methods: RequestMethods[];
	};
	mutateRequest: {
		enabled: boolean;
		endpointReplace: string;
		method: RequestMethods;
		headersToAdd: {[s: string]: string;}
		headersToRemove: string[];
		replaceBody: {
			enabled: boolean;
			type: RequestBodyTypes;
			value: string | Blob;
		};
	};
	mutateResponse: {
		enabled: boolean;
		responseLocally: boolean;
		statusCode: number | null;
		headersToAdd: {[s: string]: string;}
		headersToRemove: string[];
		replaceBody: {
			enabled: boolean;
			type: RequestBodyTypes;
			value: string | Blob;
		};
	};
	responseError: {
		enabled: boolean;
		reason: CancelReasons;
	};
}

export interface Rule extends RuleData {
	id: number;
}

