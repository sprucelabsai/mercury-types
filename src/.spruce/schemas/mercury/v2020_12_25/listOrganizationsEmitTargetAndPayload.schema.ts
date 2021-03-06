import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import listOrgsEmitPayloadSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/listOrgsEmitPayload.schema'

const listOrganizationsEmitTargetAndPayloadSchema: SpruceSchemas.Mercury.v2020_12_25.ListOrganizationsEmitTargetAndPayloadSchema  = {
	id: 'listOrganizationsEmitTargetAndPayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: listOrgsEmitPayloadSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(listOrganizationsEmitTargetAndPayloadSchema)

export default listOrganizationsEmitTargetAndPayloadSchema
