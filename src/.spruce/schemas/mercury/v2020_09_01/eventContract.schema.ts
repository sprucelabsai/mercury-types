import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSignaturesByNameSchema from '#spruce/schemas/mercury/v2020_09_01/eventSignaturesByName.schema'

const eventContractSchema: SpruceSchemas.Mercury.v2020_09_01.EventContractSchema  = {
	id: 'eventContract',
	version: 'v2020_09_01',
	namespace: 'Mercury',
	name: 'Event contract',
	description: 'A Mercury Event Contract.',
	    fields: {
	            /** . */
	            'id': {
	                type: 'id',
	                options: undefined
	            },
	            /** . */
	            'eventSignatures': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: eventSignaturesByNameSchema,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(eventContractSchema)

export default eventContractSchema