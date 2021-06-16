import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSignatureSchema_v2020_09_01 from '#spruce/schemas/mercury/v2020_09_01/eventSignature.schema'

const eventSignaturesByNameSchema: SpruceSchemas.Mercury.v2020_09_01.EventSignaturesByNameSchema  = {
	id: 'eventSignaturesByName',
	version: 'v2020_09_01',
	namespace: 'Mercury',
	name: '',
	dynamicFieldSignature: { 
	    type: 'schema',
	    keyName: 'eventName',
	    isRequired: true,
	    options: {schema: eventSignatureSchema_v2020_09_01,}
	}}

SchemaRegistry.getInstance().trackSchema(eventSignaturesByNameSchema)

export default eventSignaturesByNameSchema
