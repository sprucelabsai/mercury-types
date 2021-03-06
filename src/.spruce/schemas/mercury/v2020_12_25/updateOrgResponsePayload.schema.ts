import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import updateOrgSchema_v2020_12_25 from '#spruce/schemas/mercury/v2020_12_25/updateOrg.schema'

const updateOrgResponsePayloadSchema: SpruceSchemas.Mercury.v2020_12_25.UpdateOrgResponsePayloadSchema  = {
	id: 'updateOrgResponsePayload',
	version: 'v2020_12_25',
	namespace: 'Mercury',
	name: '',
	    fields: {
	            /** . */
	            'organization': {
	                type: 'schema',
	                isRequired: true,
	                options: {schema: updateOrgSchema_v2020_12_25,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updateOrgResponsePayloadSchema)

export default updateOrgResponsePayloadSchema
